export type RootTabParamList = {
  Main: undefined;
  Finances: undefined;
  Notes: undefined
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
