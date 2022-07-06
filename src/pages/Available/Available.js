import { useEffect } from 'react';
import Cards from '../../components/Cards/Cards';
import MenuTop from '../../components/MenuTop/MenuTop';
import styles from './Available.module.css';

const Available = () => {
    //Mudando a cor do background quando entrar na página...
    useEffect(() => {
        document.body.style.backgroundColor = '#FFFFFF';
    }, []);

    const pets = [
        {
            animal: 'Cachorro',
            name: 'Dunga',
            imagem: '../../img/pets/Dunga.png',
            age: '2 anos',
            size: 'Porte pequeno',
            features: 'Calmo e educado',
            breed: 'Beagle',
            city: 'Rio de Janeiro (RJ)',
        },
        {
            animal: 'Gato',
            name: 'Felícia',
            imagem: '../../img/pets/Felícia.png.png',
            age: '3 meses',
            size: 'Porte pequeno',
            features: 'Ativa e carinhosa',
            breed: 'Gato americano',
            city: 'Nova Iguaçu (RJ)',
        },
        {
            animal: 'Cachorro',
            name: 'Sirius',
            imagem: '../../img/pets/Sirius.png.png',
            age: '6 meses',
            size: 'Porte grande',
            features: 'Atuivo e educado',
            breed: 'Border collie',
            city: 'Duque de Caixias (RJ)',
        },
        {
            animal: 'Cachorro',
            name: 'Fiona',
            imagem: '../../img/pets/Fiona.png.png',
            age: '3 anos',
            size: 'Porte pequeno',
            features: 'Calma e carinhosa',
            breed: 'pinscher',
            city: 'São Gonçalo (RJ)',
        },
        {
            animal: 'Cachorro',
            name: 'Sid',
            imagem: '../../img/pets/Sid.png.png',
            age: '8 meses',
            size: 'Porte médio/grande',
            features: 'Brincalhão e amável',
            breed: 'Golden retrieve',
            city: 'Rio de Janeiro (RJ)',
        },
    ];

    return (
        <div className={styles.available}>
            <MenuTop />
            <p className={styles.paragraph}>Olá! Veja os amigos disponíveis para adoção!</p>
            <ul className={styles.petList}>
                {pets.map((pet, index) => (
                    <li className={styles.listItem} key={index}>
                        <Cards
                            name={pet.name}
                            imagem={pet.imagem}
                            age={pet.age}
                            size={pet.size}
                            features={pet.features}
                            breed={pet.breed}
                            city={pet.city}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Available;
