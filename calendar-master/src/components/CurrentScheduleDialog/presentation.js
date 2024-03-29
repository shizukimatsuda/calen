import React from "react";
import {
    Dialog,
    DialogContent,
    IconButton,
    DialogActions,
    Grid,
    Typography
} from "@material-ui/core";
import { Close, LocationOnOutlined, NotesOutlined, DeleteOutlineOutlined } from "@material-ui/icons";
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

const spacer = (top, bottom) => ({
    margin: `${top}px 0 ${bottom}px 0`
});

const CurrentScheduleDialog = ({
    schedule: { item, isDialogOpen },
    closeDialog,
    deleteItem,
    editItem
}) => { 
    return (
        <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
            <DialogActions>
                <div className="closeButton">
                    <style jsx global>{`
                    .closeButton {
                        text-align: right;
                      }
                    `}</style>
                    <IconButton onClick={()=>editItem(item)} size="small">
                        <EditOutlinedIcon />
                    </IconButton>
                    <IconButton onClick={deleteItem} size="small">
                        <DeleteOutlineOutlined />
                    </IconButton>
                    <IconButton onClick={closeDialog} size="small">
                        <Close />
                    </IconButton>
                </div>
            </DialogActions>

            <DialogContent>
                {item && (
                    <>
                        <div>
                            <style jsx global>{`
                            .box {
                                background-color: rgb(121, 134, 203);
                                width: 16px;
                                height: 16px;
                                display: block;
                                margin-left: 6px;
                                border-radius: 4px;
                              }
                            `}</style>
                            <Grid
                                container
                                spacing={1}
                                alignItems="center"
                                justify="space-between"
                                style={spacer(0, 30)}
                            >
                                <Grid item>
                                    <span className="box"></span>
                                </Grid>
                                <Grid item xs={10}>
                                    <Typography variant="h5" component="h2">
                                        {item.title}
                                    </Typography>
                                    <Typography color="textSecondary">
                                        {item.date.format("M月 D日")}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>

                        {item.location && (
                            <Grid
                                container
                                spacing={1}
                                alignItems="center"
                                justify="space-between"
                                style={spacer(0, 4)}
                            >
                                <Grid item>
                                    <LocationOnOutlined />
                                </Grid>
                                <Grid item xs={10}>
                                    <Typography>{item.location}</Typography>
                                </Grid>
                            </Grid>
                        )}
                        {item.radio && (
                            <Grid
                                container
                                spacing={1}
                                alignItems="center"
                                justify="space-between"
                                style={spacer(0, 4)}
                            >
                                <Grid item>
                                    <AccessTimeOutlinedIcon />
                                </Grid>
                                <Grid item xs={10}>
                                    <Typography>{item.radio}</Typography>
                                </Grid>
                            </Grid>
                        )}
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default CurrentScheduleDialog;