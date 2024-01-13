import PropTypes from 'prop-types';

import Header from './Header';

export default function Layout({ children }) {
  return (
    <main>
      <Header />
      <div>{children}</div>
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.node
};
