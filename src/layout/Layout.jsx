import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <main>
      <Header />
      <div>{children}</div>
      <Footer />
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.node
};
