import { useParams } from 'react-router-dom';
import { useDeleteContacts, useGetContactDetail } from '../services/tanStack';


export default function Contact() {
  const { contactId } = useParams();
 

  const deleteContacts = useDeleteContacts();

  const { data: contact, isLoading, isError } = useGetContactDetail(contactId);


  const deleteHandled = () => {
    deleteContacts.mutate(contactId);
  }

  if (!contact) return 'loading';
  if(isLoading) return <div className='red'> <p>Yükleniyor...</p> </div>

  return (
    <div id="contact">
      <div>
        <img key={contact.avatar} src={contact.avatar || null} />
      </div>

      <div>
        <h1 data-testid="full_name">
          {contact.first_name || contact.last_name ? (
            <>
              {contact.first_name} {contact.last_name}
            </>
          ) : (
            <i>No Name</i>
          )}{' '}
        </h1>

        {contact.email && (
          <p>
            <a target="_blank" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </p>
        )}

        {contact.description && <p>{contact.description}</p>}

        <div>
          <button className="delete" onClick={deleteHandled}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
