import React from 'react';
import './App.css';
import SongList from './SongList'

// async componentDidMount() {
//   const response = await fetch('http://localhost:3000/all')
//   const json = await response.json()
//   this.setState({
//     emailsFromServer: json,
//     fetchingAllEmails: true,
//   })

//   console.log('emailsFromServer in APP: ', this.state.emailsFromServer)
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      informationFromServer: [],
      allInformationFetched: false
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:3000/all')
    const json = await response.json()
    this.setState({
      informationFromServer: json,
      allInformationFetched: true,
    })

    console.log('Information from server: ', this.state.informationFromServer)
  }

  render() {
      return (
        <div className="App">
          <p>{
            this.state.allInformationFetched ? 
                this.state.informationFromServer.map((item, index) => {
                  return (
                    <ul key={item.id}>
                      <SongList song={item} />
                    </ul>
                  )
                })
              :
              "loading..."
            }
          </p>
        </div>
      );
  }
}
  
export default App;
