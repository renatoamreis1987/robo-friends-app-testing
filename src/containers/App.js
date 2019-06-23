import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import Header from "../components/Header";
import "./App.css";

import { setSearchField, requestRobots } from '../actions';


const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}



class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }


  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });

    if (isPending) { //If there is no robots we are loading
      return <h1>Loading</h1>
    } else {
      return (
        <div className="tc">
          <Header />
          <SearchBox SearchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry> 
            <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

//ErrorBoundry above it means -> If anything inside fails (ex CardList) it will execute...
//...the ErrorBoundry


export default connect(mapStateToProps, mapDispatchToProps)(App);
