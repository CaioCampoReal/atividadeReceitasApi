import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import jsonData from '../receitas.json'
import Novo from './Novo';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
const Modal = ({ isOpen, onClose, selectedItem }) => {
    if (!isOpen || !selectedItem) return null;
    return (
      <div className={`modal-overlay ${isOpen ? 'show' : ''}`}>
        <div className="modal-content left-half">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>{selectedItem.titulo}</h2>
          <img src={selectedItem.image} style={{ maxWidth: '350px', maxHeight: '350px' }} />
          <p>Ingredientes: {selectedItem.ingredientes}</p>
          <p>Modo de Preparo: {selectedItem.modoPreparo}</p>
        </div>
      </div>
    );
  };
  

const Home = () =>  {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [data, setData] = useState([]);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setModalOpen(true);
      };
    
    const addItemToList = (newItem) => {
        setData([...data, newItem]);
    };

    useEffect(() => {
        var listaReceitas = [...jsonData];
        setData(listaReceitas);
        }, []);

    return (
        <>
          <section className="d-flex mb-5 fullAlignFlex" id="listaReceitas">
            <div className="align-self-center">
    
              <div className="d-flex mt-3 flex-wrap justify-content-center">
                {data.map(item => (
                  <div key={item.id} onClick={() => handleItemClick(item)} className='col-md-6' style={{ cursor: 'pointer' }}>
                    <h3><strong>{item.titulo}</strong></h3>
                  </div>
                ))}
              </div>
              <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} selectedItem={selectedItem} />
            </div>
          </section>
        </>
      );
    }
        
export default Home;