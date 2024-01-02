import PropTypes from 'prop-types';
import {List } from '@mui/material';
import NavItem from '../NavItem';
import NavCollapse from '../NavCollapse';


const NavGroup = ({ item }) => {
  const items = item.children?.map((menu) => {
    switch (menu.type) {
      case 'collapse':
        return <NavCollapse key={menu.id} menu={menu} level={1} />;
      case 'item':
        return <NavItem key={menu.id} item={menu} level={1} />;
      default:
        return (
         <>
         </>
        );
    }
  });

  return (
    <>
      <List
        subheader={
          item.title && (
            <></>
          )
        }
      >
        {items}
      </List>

    </>
  );
};

NavGroup.propTypes = {
  item: PropTypes.object
};

export default NavGroup;
