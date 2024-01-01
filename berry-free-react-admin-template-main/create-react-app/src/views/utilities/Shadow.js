import PropTypes from 'prop-types';

// material-ui
import { Box, Card } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

// ===============================|| SHADOW BOX ||=============================== //

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

// ============================|| UTILITIES SHADOW ||============================ //

const UtilitiesShadow = () => (
  <MainCard title="Questions" secondary={<SecondaryAction link="https://next.material-ui.com/system/shadows/" />}>
    
  </MainCard>
);

export default UtilitiesShadow;
