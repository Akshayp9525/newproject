import { lazy } from 'react';

import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const UtilsTypography = Loadable(lazy(() => import('views/utilities/profile')));
const ExamType = Loadable(lazy(() => import('views/utilities/examType')));
const UtilsQuestions = Loadable(lazy(() => import('views/utilities/questions')));
const UtilsHrList = Loadable(lazy(() => import('views/utilities/Hrlist')));
const UtilsJobId = Loadable(lazy(() => import('views/utilities/Jobid')));
const UtilsResults = Loadable(lazy(() => import('views/utilities/result')));
const UtilsRGenerateExam = Loadable(lazy(() => import('views/utilities/GenerateExam')));


const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-examtype',
          element: <ExamType />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-question',
          element: <UtilsQuestions/>
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-hr',
          element: <UtilsHrList/>
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-jobid',
          element: <UtilsJobId/>
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-result',
          element: <UtilsResults/>
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-GenerateExams',
          element: <UtilsRGenerateExam/>
        }
      ]
    },
  ]
};

export default MainRoutes;
