import { ReactElement } from "react";



export namespace MainInterfaces {
  export namespace IInlineSection {
    export interface Entry {
      text: string;
      color?: string;
      key?: string;
      gradient?: string;
      props?: object
    }

    export interface Entries {
      title: Entry[];
      subtitle: Entry[];
      jsx?: ReactElement<any, any>,
      rightJsx?: ReactElement<any, any>
    }
  }

  export interface IButtonWithSnipped {
    buttonTitle: string,
    snippetText?: string,
    snippetJsx?: ReactElement<any, any>,
    buttonColor?: string,
  }
}
