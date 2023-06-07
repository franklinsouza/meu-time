interface Data {
  value: string;
  label: string;
}

export interface DataApi {
  isDisable: boolean;
  isLoading: boolean;
  optionSelected: string | null;
  data: Data[];
}

export interface SelectActions {
  [key: string]: () => void;
}
