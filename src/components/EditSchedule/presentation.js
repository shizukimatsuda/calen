import React from "react";
import { Dialog, DialogContent, TextField, DialogActions, Button, Input, Grid } from "@material-ui/core";
import { LocationOnOutlined, NotesOutlined } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles"

const spacer = { margin: "4px 0" };

const Title = withStyles({
  root: { marginBottom: 32, fontSize: 22 }
})(Input);

const EditScheduleDialog = ({ schedule: { isEditDialogOpen, newitem }, closeEditDialog, setSchedule, saveSchedule }) => {
  return (
    <Dialog open={isEditDialogOpen} onClose={closeEditDialog} maxWidth="xs" fullWidth>
      <DialogContent>
        <Title autoFocus fullWidth
          defaultValue={newitem.title}
          onChange={e => setSchedule({ title: e.target.value })}
        />
        <Grid container spacing={1} alignItems="center" justify="space-between">
          <Grid item>
            <LocationOnOutlined />
          </Grid>
          <Grid item xs={10}>
            <TextField style={spacer} fullWidth
              defaultValue={newitem.location}
              onChange={e => setSchedule({ location: e.target.value })}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center" justify="space-between">
            <input type="radio" name="daytime" value="朝" onChange={e => setSchedule({ radio: e.target.value })} />
            <span>朝</span>
            <input type="radio" name="daytime" value="昼" onChange={e => setSchedule({ radio: e.target.value })} />
            <span>昼</span>
            <input type="radio" name="daytime" value="間食" onChange={e => setSchedule({ radio: e.target.value })} />
            <span>間食</span>
            <input type="radio" name="daytime" value="夜" onChange={e => setSchedule({ radio: e.target.value })} />
            <span>夜</span>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="outlined" onClick={saveSchedule}>
          保存
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditScheduleDialog;