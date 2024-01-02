
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};
const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Profile',
      type: 'item',
      url: '/utils/util-typography',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'util-extype',
      title: 'Exam Type',
      type: 'item',
      url: '/utils/util-examtype',
      icon: icons.IconPalette,
      breadcrumbs: false
    },
    {
      id: 'util-questions',
      title: 'Questions',
      type: 'item',
      url: '/utils/util-question',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'util-id',
      title: 'Job ID',
      type: 'item',
      url: '/utils/util-jobid',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'util-hr',
      title: 'HR List',
      type: 'item',
      url: '/utils/util-hr',
      icon: icons.IconWindmill,
      breadcrumbs: false
    },
    {
      id: 'util-result',
      title: 'Result',
      type: 'item',
      url: '/utils/util-result',
      icon: icons.IconWindmill,
      breadcrumbs: false
    },
    {
      id: 'util-GenerateExam',
      title: 'Generate',
      type: 'item',
      url: '/utils/util-GenerateExams',
      icon: icons.IconWindmill,
      breadcrumbs: false
    },
   
  
  ]
};

export default utilities;
