import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Feb4 from './Feb4';
import Feb11 from './Feb11';
import Mar4 from './Mar4';
import Mar11 from './Mar11';


export default class Events extends Component {
  render() {
    return (
      <div className='text'>
        <div>
          <h1>events</h1>
          <Link to="/"><img src={require('./images/home-button.png')} /></Link>
          <Link to="/signup">
            <h1 className="signup">Performance Sign-up</h1>
            </Link>
          <div className="blitz-rehearsals">

          <h3 className="rehearsal-time">Rehearsals are held every Tuesday from 5:45 pm to 6:30 pm in Good Samaritan Creative Arts Room</h3>
          <div className="west">
            <h2>W = West Blitz</h2>
            <table>
              <tr>
              <th>Time</th>
              <th>Location</th>
              </tr>
              <tr>
                <td>9:45 AM</td>
                <td>Arbors del Rey</td>
              </tr>
              <tr>
                <td>10:30 AM</td>
                <td>Casa Bella</td>
              </tr>
              <tr>
                <td>11:30 AM</td>
                <td>Mesilla Valley Hospice</td>
              </tr>
              <tr>
                <td>12:00 PM</td>
                <td>Lunch (TBA)</td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>Casa Del Sol</td>
              </tr>
            </table>
          </div>
          <div className="east">
            <h2>E = East Blitz</h2>
            <table>
              <tr>
              <th>Time</th>
              <th>Location</th>
              </tr>
              <tr>
                <td>11:00 AM</td>
                <td>Sagecrest</td>
              </tr>
              <tr>
                <td>12:00 PM</td>
                <td>Golden Mesa</td>
              </tr>
              <tr>
                <td>12:30 PM</td>
                <td>Lunch (TBA)</td>
              </tr>
              <tr>
                <td>1:30 PM</td>
                <td>Aristocrat</td>
              </tr>
              <tr>
                <td>2:30 PM</td>
                <td>Good Samaritan</td>
              </tr>
            </table>
          </div>

          </div>

        </div>
        <div>
        <h1 className="list">performers list</h1>
        <Tabs
        onSelect={this.handleSelect}
        selectedIndex={0}
        className='event-tabs'
        >

        <TabList>
          <Tab>W | 2.4</Tab>
          <Tab>E | 2.11</Tab>
          <Tab>W | 3.4</Tab>
          <Tab>E | 3.11</Tab>
        </TabList>
          <TabPanel>
            <div><Feb4 /></div>
          </TabPanel>
          <TabPanel>
            <div><Feb11 /></div>
          </TabPanel>
          <TabPanel>
            <div><Mar4 /></div>
          </TabPanel>
          <TabPanel>
            <div><Mar11 /></div>
          </TabPanel>
      </Tabs>

      </div>
      </div>
    );
  }
}
