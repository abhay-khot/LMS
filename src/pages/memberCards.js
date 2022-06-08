import React from 'react';
import Panel from '../Tabs/Panel';
import './memberCards.css';
import MemberTabs from './memberTabs';
import Tabs from './Tabs';
function MemberCards() {
  return (
    <>
      <Tabs>
        <Panel title="Convenor">
          <div class="container">
            <div class="card card0">
              <div class="border">
                <h2>Prof. Dr. Sashikumaar Ganesan</h2>
                <h4>
                  Associate Professor and Chairman
                  <br />
                  Department of Computational and Data Sciences
                </h4>
                <div class="icons">
                  <i></i>
                </div>
              </div>
            </div>
          </div>
        </Panel>
        <Panel title="Postdocs"></Panel>

        <Panel title="PhD"></Panel>
        <Panel title="M.Tech(Research)"></Panel>

        <Panel title="M.Tech"></Panel>
        <Panel title="Associates"></Panel>

        <Panel title="Alumni"></Panel>
      </Tabs>
    </>
  );
}

export default MemberCards;
