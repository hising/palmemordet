import React from 'react';
import { Link } from 'react-router-dom';

export const NavLink = ({to, props}) => <Link to={to} {...props} />;
