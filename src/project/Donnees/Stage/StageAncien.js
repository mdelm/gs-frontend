import React, { useState } from "react";
import { 
	TabContent, 
	TabPane, 
	Nav, 
	NavItem, 
	NavLink, 
	Card, 
	Button, 
	CardTitle, 
	CardText, 
	Row, 
	Col
} from 'reactstrap';
import classnames from "classnames";
import "./stageAncien.css";
import PrintRoundedIcon from '@material-ui/icons/PrintRounded';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';

const StageAncien = (props) => {
	const [ activeTab, setActiveTab ] = useState("3");

	const toggle = tab => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	return (
		<div className="stage-ancien">
			<Nav tabs>
        <NavItem className="pointer">
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            <strong>Détail du Stage</strong>
          </NavLink>
        </NavItem>
        <NavItem className="pointer">
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            <strong>Entreprise : SOTASIB</strong>
          </NavLink>
        </NavItem>
        <NavItem className="pointer">
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            <strong><CheckRoundedIcon /> Ce depot est valide</strong>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1" className="pane">
          <Row>
            <Col sm="12">
              <h4>Tab 1 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2" className="pane">
          <Row>
            <Col sm="6">
               <h4>Tab 2 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3" className="pane">
          <Button color="info" className="ml-2">
          	<PrintRoundedIcon /> Lettre d'affectation
          </Button>
          <Button color="info" className="ml-2">
          	<PrintRoundedIcon /> Fiche d'évaluation
          </Button>
          <Button color="info" className="ml-2">
          	<PrintRoundedIcon /> Proposition SFE
          </Button>

          <br/>
          <hr/>
          <br/>

          <Button color="info">
          	<GetAppRoundedIcon /> Lettre d'autorisation de dépot
          </Button>

          <br/>
          <br/>

          <div className="date-de-cloture">
          	<div className="date-label">
          		<i className="fa fa-calendar" /> Date de cloture de dépot rappot
          	</div>
          	<i className="fa fa-caret-left"/>
          	<div className="dt">
          		Samedi 22 février 2020 (il y a 1an)
          	</div>
          </div>

        </TabPane>
      </TabContent>
		</div>
	);
};

export default StageAncien;