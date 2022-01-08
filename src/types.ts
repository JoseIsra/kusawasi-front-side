interface BaseItem {
  id: string;
  label: string;
}

export interface NavItems {
  id: string;
  icon: string;
  name: string;
  label: string;
  children: BaseItem[];
}
