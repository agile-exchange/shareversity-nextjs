"use client"
import { getData } from '../../Modules/module';
import { useState, useEffect } from 'react';
import '../../App.css';
import StudentCard from '../../components/StudentCard';
import SearchInput from '../../components/SearchInput';
import SearchTag from '../../components/SearchTag';
import styles from "../page.module.css";

export default function Search (){
   const [data, setData] = useState([]);
  const [nameSearchInput, setNameSearchInput] = useState('');
  const [tagSearchInput, setTagSearchInput] = useState('');
  const [filteredResult, setFilteredResult] = useState([]);
  const [filteredTagResult, setFilteredTagResult] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      data.students.map((student) => (student.tags = []));
      setData(data.students);
    });
  }, []);

  const searchItems = (searchValue) => {
    if (searchValue !== '') {
      const filteredData = data.filter((student) => {
        const name = student.firstName + student.lastName;
        return name.toLowerCase().includes(searchValue.toLowerCase());
      });
      setFilteredResult(filteredData);
    } else {
      setFilteredResult(data);
    }
  };

  const searchTags = (tagValue) => {
    if (tagValue !== '') {
      const filteredTag = [];

      // eslint-disable-next-line array-callback-return
      data.filter((student) => {
        // eslint-disable-next-line array-callback-return
        student.tags.map((tag) => {
          if (tag.toLowerCase().includes(tagValue.toLowerCase())) {
            filteredTag.push(student);
          }
        });
      });

      setFilteredTagResult(filteredTag);
    } else {
      setFilteredTagResult(data);
    }
  };
   return (<>
<h1 className={styles.title}>
Profile Directory
        </h1>
      <SearchInput searchItems={searchItems} setNameSearchInput={setNameSearchInput} />
      <SearchTag searchTags={searchTags} setTagSearchInput={setTagSearchInput} />
      <div className="main">
        <div>
          {nameSearchInput.length > 0
            ? filteredResult.map((student) => (
                <div>
                  <StudentCard key={student.id} {...student} students={data} setData={setData} />
                </div>
              ))
            : tagSearchInput.length > 0
            ? filteredTagResult.map((student) => (
                <div>
                  <StudentCard key={student.id} {...student} students={data} setData={setData} />
                </div>
              ))
            : data.map((student) => (
                <div>
                  <StudentCard key={student.id} {...student} students={data} setData={setData} />
                </div>
              ))}
        </div>
      </div>
    </>) };