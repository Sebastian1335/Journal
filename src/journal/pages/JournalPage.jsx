import { colors, IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal";

export const JournalPage = () => {
    const state = useSelector(state => state.journal)
    const dispatch = useDispatch()
    const onClickNewNote = () =>  {
      dispatch(startNewNote());
    };

    return (
        <JournalLayout>
            {/* <Typography>Excepteur deserunt aliquip pariatur irure velit incididunt nisi. Veniam voluptate consectetur ut ad anim eu esse adipisicing minim duis minim labore occaecat fugiat. In eiusmod reprehenderit ad est. Eiusmod irure ipsum ex officia labore dolore veniam dolore fugiat est Lorem occaecat duis ullamco. Et quis dolor incididunt dolore enim consectetur dolore mollit labore amet.</Typography> */}
            
            {
              !!state.active ? 
              <NoteView/>
              :
              <NothingSelectedView />
            }
            <IconButton
                disabled={state.isSaving}
                onClick={onClickNewNote}
                size="large"
                sx={{
                    color: "white",
                    backgroundColor: "error.main",
                    ":hover": { backgroundColor: "error.main", opacity: 0.9 },
                    position: "fixed",
                    right: 50,
                    bottom: 50,
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>
        </JournalLayout>
    );
};
