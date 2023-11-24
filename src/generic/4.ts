/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor (public props:T) {

  }
}
interface Title {
    title: string;
}

class Page<T extends Title> extends Component<T> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};