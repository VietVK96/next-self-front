import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';

const JsonViewer = ({ data }) => {
  const renderJson = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
      return (
        <Typography variant="body2" sx={{ ml: 2 }}>
          {String(obj)}
        </Typography>
      );
    }

    return Object.entries(obj).map(([key, value], index) => (
      <Accordion key={index} sx={{ mb: 1 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1">{key}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ ml: 2 }}>{renderJson(value)}</Box>
        </AccordionDetails>
      </Accordion>
    ));
  };

  return (
    <Box sx={{ maxWidth: '800px', mx: 'auto', mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
      </Typography>
      {renderJson(data)}
    </Box>
  );
};
JsonViewer.propTypes = {
  data:PropTypes.any
}
export default JsonViewer