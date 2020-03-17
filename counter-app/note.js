/*  Rendering Classes Dynamically  */

render() {
  return (
    <div>
      <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
      <button className="btn btn-secondary btn-sm"> Increment </button>
    </div>
  );
}

getBadgeClasses() {
  let classes = "badge m-2 badge-";
  classes += this.state.count === 0 ? "warning" : "primary";
  return classes;
}

/*  Setting Attribute  */
/*  Image  */

class Counter extends Component {
    state = {
      count: 0,
      imageUrl: 'https://picsum.photos/200'
    };

    render() {
      return (
        <div>
          <img src={this.state.imageUrl} alt=""/>
          <span> {this.formatCount()}</span>
          <button> Increment </button>
        </div>
      );
    }
}

/*  style and inline-style  */

class Counter extends Component {
    state = {
      count: 0,
    };

    styles = {
      fontSize: 10,
      fontWeight: "bold"
    }

    render() {
      return (
        <div>
          <span styles="this.style"> {this.formatCount()}</span>
          <button style= {{ fontSize:20 }}> Increment </button>
        </div>
      );
    }
}

/*  Map and Key  */

class Counter extends Component {
    state = {
        count: 0,
        tags: ["tagA", "tagB", "tagC", "tagD"]
    };

    render() {
        return(
            <div>
                <span className="badge badge-primary m-2">{this.formatCount()}</span>
                <button>Increment</button>
                <ul>{this.state.tags.map(tag => <li key={tag}> {tag} </li>)}</ul>
            </div>
        );
    }

/*  Conditional Rendering  */

class Counter extends Component {
    state = {
        count: 0,
        tags: ["tagA", "tagB", "tagC", "tagD"]
    };

    renderTags() {
      if (this.state.tags.length === 0) return <p> There are no tags!</p>;

      return <ul>{this.state.tags.map(tag => <li key={tag}> {tag} </li>)}</ul>
    }

    render() {
        return <div>
              {this.state.tags.length === 0 && "Please create a new tag!"}
              {this.rednerTags()}

            </div>
        );
    }

/*  Handling Events  */
class Counter extends Component {
    state = {
        count: 0,

    };

    handleIncrement(){
      console.log("Increment Clicked");
    }

    render() {
        return(
            <div>
                <span className="badge badge-primary m-2">{this.formatCount()}</span>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        );
    }


/*  Binding Events Handlers
You can either use constructor or arrow function  */

class Counter extends Component {
    state = {
        count: 0,

    };
/*  Constructor  */
    constructor() {
      super();
      this.handleIncrement = this.handleIncrement.bind(this);
    }
/*  Arrow function  */
    handleIncrement = () =>{
      console.log("Increment Clicked", this);
    }

    render() {
        return(
            <div>
                <span className="badge badge-primary m-2">{this.formatCount()}</span>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        );
    }

/*  Updating the State  */

class Counter extends Component {
    state = {
        count: 0,
        tags: ["tagA", "tagB", "tagC", "tagD"],
        reset: 0
    };
    handleIncrement = () => {
      this.setState({ count: this.state.count + 1})
    }

    handleReset = () => {
      this.setState({ reset: this.state.count = 0})
    }

    render() {
        return(
            <div>
                <span className="badge badge-primary m-2">{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm mr-2" onClick={this.handleIncrement}>Increment</button>
                <button className="btn btn-secondary btn-sm" onClick={this.handleReset}>Reset</button>
            </div>
        );
    }

/*  Passing Event Arguments  */

    handleIncrement = (product) => {
      console.log(product);
      this.setState({ count: this.state.count + 1})
    };

    doHandleIncrement = () => {
      this.handleIncrement({id:1});
    };

    render() {
        return(
            <div>
                <button className="btn btn-secondary btn-sm mr-2"
                onClick={this.doHandleIncrement}>Increment</button>
            </div>
        );
    }

    /*  inline to Passing Event Arguments  */

    handleIncrement = product => {
      console.log(product);
      this.setState({ count: this.state.count + 1})
    }

    render() {
        return(
            <div>
                <button className="btn btn-secondary btn-sm mr-2"
                onClick={() => this.handleIncrement({id:1})}>Increment</button>
            </div>
        );
    }


/*  Class Component and Stateless Functional Component both are work  */

/*  Class Component  */

class Navbar extends Component {
  render() {
      return(
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
              Navbar <span className="badge badge-pill badge-info"> {this.props.totalCounters}</span>
            </a>
          </nav>
      );
  }
}

/*  Stateless Functional Component  */

const Navbar = (props) => {
  return(
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar <span className="badge badge-pill badge-info">
          {props.totalCounters}</span>
        </a>
      </nav>
  );
};
