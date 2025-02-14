export type RootTabParamList = {
  Main: undefined;
  Finances: undefined;
  Notes: undefined
  Users:undefined
};

export type MainStackParamList = {
  MainScreen: undefined;
};

export type FinancesStackParamList = {
  MyFinances: undefined;
  SingleDetailedTransaction: {
    id: number | string;
  };
};

export type NotesStackParamList = {
  MyNotes: undefined;
  SingleNote: {
    id:string 
  }
}

export type UsersStackParamList = {
  usersScreen:undefined
  singleUser:{
    id:number
  }
}