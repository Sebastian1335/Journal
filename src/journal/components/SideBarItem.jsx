import { TurnedInNot } from "@mui/icons-material";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";

export const SideBarItem = ({title, body, id, date, imageUrls = []}) => {
    const newTitle = useMemo( () => {
        return title > 17 ? title.substring(0,17) + '...' : title;
    }, [title])
    const dispatch = useDispatch()
    const onItem = () => {
        dispatch(setActiveNote({id, title, body, date, imageUrls}))
    }
    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onItem}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    );
};
