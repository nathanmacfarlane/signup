import { Breadcrumb } from 'antd';
import { useLocation } from 'react-router';

const getCrumbs = (path: string) => {
  switch (path) {
    case '/my-signups':
      return ['Signups', 'My Signups']
    case '/create-sign-up':
      return ['Signups', 'Create Signup']
    case '/chat':
      return ['Chat']
    default:
      if (path.includes('signups')) {
        return ['Signups', 'View Signup']
      }
      return ['Home']
  }
}

export const Crumbs = () => {
  const { pathname } = useLocation();
  const crumbs = getCrumbs(pathname);

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {crumbs.map(crumb => <Breadcrumb.Item key={crumb}>{crumb}</Breadcrumb.Item>)}
    </Breadcrumb>
  )
}