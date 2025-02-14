import { NavigationProp } from "@react-navigation/native";
import { NotesStackParamList } from "../../navigation/types";

export type noteProp = {
    header: string;
    text: string;
    id: string;
  };



export type singleNoteProp = {
  item: noteProp;
};

export type props = NavigationProp<NotesStackParamList>;