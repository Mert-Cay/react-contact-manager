import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useGetContacts } from '../services/tanStack';

export default function SideBar() {

const { data: contacts = [], isLoading, isError } = useGetContacts();


  if (isLoading) return <div id="sidebar"><h1>Yükleniyor...</h1></div>;
  if (isError) return <div id="sidebar"><h1>Hata oluştu!</h1></div>;

   
  return (
    <div id="sidebar">
      <h1>WiTech Contacts</h1>
      <div>
        <Link to="/contacts/new">
          <button type="submit">New</button>
        </Link>
        <Link to="/">
          <button type="submit">Home</button>
        </Link>
      </div>
      <nav>
        {contacts.length ? (
          <ul>
            {contacts.map((contact) => (
              <li key={contact.id}>
                <NavLink
                  to={`/contacts/${contact.id}`}
                  data-testid="contact"
                  className={({ isActive, isPending }) =>
                    isActive ? 'active' : isPending ? 'pending' : ''
                  }
                >
                  {contact.first_name || contact.last_name ? (
                    <>
                      {contact.first_name} {contact.last_name}
                    </>
                  ) : (
                    <i>No Name</i>
                  )}{' '}
                  {contact.favorite && <span>★</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            <i>No contacts</i>
          </p>
        )}
      </nav>
    </div>
  );
}
