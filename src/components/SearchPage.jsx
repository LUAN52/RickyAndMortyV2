import React, { useState, useEffect } from 'react';
import ErrorPage from './ErrorPage';

import {
    FormContainer, ImgContainer,
    ResultContainer, SearchContainer, SearchForm, Title
} from './SearchPageStyled';

import { getByStatus, getByName, getByGender } from '../api/api';
import PaginationButton from './PaginationButton';

const SearchPage = () => {

    const [value, setValue] = useState("Selecione");
    const [text, setText] = useState("");
    const [searchObj, setSearchObj] = useState({ text: "", value: "Selecione", numberPage: 1, actualPage: 1 });
    const [searchArray, setSearchArray] = useState([]);
    const [clickedButton, setClickedButton] = useState(false);
    const [codeError, setCodeError] = useState(0);
    const [obj, setObj] = useState({ numberPage: 1, actualPage: 1 });

    const changeState = (obj) => {
        setObj(obj)
    }

    let msg = "";

    if (value !== "Selecione") {
        if (value === "status") {
            msg = "digite alive , dead ou unknown"
        }
        else if (value === "genero") {
            msg = "digite male , female ou genderless"
        }
        else {
            msg = "digite o nome de um personagem ,ex: Rick"
        }
    }

    useEffect(() => {
        const getSearch = async () => {
            if ((searchObj.value !== "Selecione") && (searchObj.text !== "")) {
                if (searchObj.value === "status") {
                    try {
                        const { data } = await getByStatus(searchObj.text, obj.actualPage)
                        setObj({ numberPage: data.info.pages, actualPage: obj.actualPage })
                        setSearchArray(data.results)
                    }
                    catch (e) {
                        setCodeError(1);
                        console.log("não buscou")
                    }

                }
                else if (searchObj.value === "genero") {
                    try {
                        const { data } = await getByGender(searchObj.text, obj.actualPage)
                        setObj({ numberPage: data.info.pages, actualPage: obj.actualPage })
                        setSearchArray(data.results)
                    }
                    catch (e) {
                        setCodeError(1);

                    }
                }
                else {

                    try {
                        const { data } = await getByName(searchObj.text, obj.actualPage)
                        setObj({ numberPage: data.info.pages, actualPage: obj.actualPage })
                        setSearchArray(data.results)
                    }
                    catch (e) {
                        setCodeError(1);

                    }
                }
            }
            else {
                setCodeError(2)
            }
        }
        getSearch();
    }, [searchObj, obj.actualPage])
    return (
        <SearchContainer>
            <Title>Busca</Title>
            <FormContainer>
                <select style={{ width: "80%" }} onClick={(e) => {
                    console.log(e.target.value)
                    setValue(e.target.value);
                    setCodeError(0);
                    setClickedButton(false);
                }} name="select">
                    <option defaultValue data-default> Selecione</option>
                    <option value="status">status</option>
                    <option value="genero" >genero</option>
                    <option value="nome">nome</option>
                </select>
                <SearchForm action="get">
                    <input placeholder={msg} name='searchT' type="text" value={text} onChange={(e) => {
                        setText(e.target.value)
                        setCodeError(0);
                        setClickedButton(false);
                    }} />

                    <button onClick={(e) => {
                        e.preventDefault();
                        setSearchObj({ text: text, value: value });
                        setObj({ numberPage: 1, actualPage: 1 });
                        setSearchArray([])
                        setClickedButton(true);
                    }} type="submit">buscar</button>
                </SearchForm>
            </FormContainer>
            {codeError !== 0 && clickedButton ? <ErrorPage error={codeError} /> : null}

            {searchArray.length > 0 ? <ResultContainer>
                {searchArray.map((item, index) => (
                    <ImgContainer key={index} >
                        <img  alt ={"personagem imagem"}src={item.image} />
                    </ImgContainer>
                   
                ))}
            </ResultContainer> : null}

            {obj.numberPage > 1 ?
                <PaginationButton obj={obj} changeState={changeState} />
                : null}
        </SearchContainer>
    )
}

export default SearchPage