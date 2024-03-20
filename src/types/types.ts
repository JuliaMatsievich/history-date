export interface ISlideContent {
  title: string;
  facts: IFacts[];
  id: number;
}

export interface IFacts {
  id: number;
  year: string;
  fact: string;
}
