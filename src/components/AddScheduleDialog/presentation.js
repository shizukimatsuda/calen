import React from "react";
import { Dialog, DialogContent, TextField, DialogActions, Button, Input, Grid, IconButton, Typography } from "@material-ui/core";
import { LocationOnOutlined, NotesOutlined, AccessTime, Close } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
import { DatePicker } from "@material-ui/pickers";

const spacer = { margin: "4px 0" };

const Title = withStyles({
    root: {
        // mergiBottom: 32,
        fontSize: 22
    }
})(Input);

const AddScheduleDialog = ({ schedule: { form: { title, location, radio, date }, isDialogOpen, isStartEdit }, closeDialog, setSchedule, saveSchedule, setIsEditStart }) => {

    const isTitleInvalid = !title && isStartEdit;

    return (
        <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
            <DialogActions>
                <div className="closeButton">
                    <style jsx global>{`
                    .closeButton {
                        text-align: right;
                      }
                    `}</style>
                    <IconButton onClick={closeDialog} size="small">
                        <Close />
                    </IconButton>
                </div>
            </DialogActions>
            <DialogContent>
                <Title autoFocus fullWidth placeholder="商品名"
                    value={title}
                    onChange={e => setSchedule({ title: e.target.value })}
                    onBlur={setIsEditStart}
                    error={isTitleInvalid}
                />
                <div className="validation">
                    <style jsx global>{`
                    .validation {
                        height: 32px;
                      }
                    `}</style>
                    {isTitleInvalid && (
                        <Typography variant="caption" component="div" color="error">
                            タイトルは必須です。
                        </Typography>
                    )}
                </div>
                <Grid container spacing={1} alignItems="center" justify="space-between">
                    <Grid item>
                        <AccessTime />
                    </Grid>
                    <Grid item xs={10}>
                        <DatePicker
                            value={date}
                            onChange={d => setSchedule({ date: d })}
                            variant="inline"
                            format="YYYY年M月D日"
                            animateYearScrolling
                            disableToolbar
                            fullWidth
                            style={spacer}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center" justify="space-between">
                    <Grid item>
                        <LocationOnOutlined />
                    </Grid>
                    <Grid item xs={10}>
                        <TextField style={spacer} fullWidth placeholder="場所を追加"
                            value={location}
                            onChange={e => setSchedule({ location: e.target.value })}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center" justify="space-between">
                    <input type="radio" name="daytime" value="朝" onChange={e => setSchedule({ radio: e.target.value})} />
                    <span>朝</span>
                    <input type="radio" name="daytime" value="昼" onChange={e => setSchedule({ radio: e.target.value})} />
                    <span>昼</span>
                    <input type="radio" name="daytime" value="間食" onChange={e => setSchedule({ radio: e.target.value})} />
                    <span>間食</span>
                    <input type="radio" name="daytime" value="夜" onChange={e => setSchedule({ radio: e.target.value})} />
                    <span>夜</span>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button color="primary" variant="outlined" onClick={saveSchedule} disabled={!title}>
                    保存
        </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddScheduleDialog;