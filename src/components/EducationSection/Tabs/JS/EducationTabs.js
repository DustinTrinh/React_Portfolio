import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import classes from "../CSS/EducationTabs.module.css";
import Skills_Tab from '../../Skills/Skills_Tab';
import Schools_Tab from '../../School/Schools_Tab';
import Certificates_Tab from '../../Certificate/Certificates_Tab';
export default function TabTest() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}  >
        <Box 
          sx={{ borderBottom: 1, borderColor: 'divider' 
          
        }}>
          <TabList 
            onChange={handleChange} 
            variant="fullWidth" centered 
            className={classes.tabHeader}
          >
            <Tab label="Skills" value="1" />
            <Tab label="School & Platforms" value="2" />
            <Tab label="Certificates" value="3" />
          </TabList>
        </Box>
        <TabPanel className={classes.tabContent} value="1">
          <Skills_Tab/>
        </TabPanel>
        <TabPanel className={classes.tabContent} value="2">
          <Schools_Tab/>
        </TabPanel>
        <TabPanel className={classes.tabContent} value="3">
          <Certificates_Tab/>
        </TabPanel>
      </TabContext>
    </Box>
  );
}