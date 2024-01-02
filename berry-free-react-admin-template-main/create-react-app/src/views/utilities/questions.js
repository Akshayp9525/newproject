import PropTypes from 'prop-types';
import { Box, Card } from '@mui/material';

import MainCard from 'ui-component/cards/MainCard';
const ShadowBox = ({ shadow }) => (
  <Card sx={{ mb: 3, boxShadow: shadow }}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 4.5,
        bgcolor: 'primary.light',
        color: 'grey.800'
      }}
    >
      <Box sx={{ color: 'inherit' }}>boxShadow: {shadow}</Box>
    </Box>
  </Card>
);

ShadowBox.propTypes = {
  shadow: PropTypes.string.isRequired
};
const UtilitiesShadow = () => (
  <MainCard title="Questions">
    
  </MainCard>
);

export default UtilitiesShadow;
