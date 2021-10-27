import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCity,display,refresh} from "./features/city/citySlice";
import "./App.css";
import { Button, Card, Col, Input, Row } from 'antd';
import { LoadingOutlined} from '@ant-design/icons';
import Illu from './weather.svg';
import Test from "./Test";


function App() {
  const dispatch = useDispatch();
  const {city} = useSelector((state) => state.city );
  

  useEffect(() => {
    dispatch(getCity());
  }, [dispatch]);

  const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };


  return (
    <div className="App">
    <div className="container">

      <div className="site-card-wrapper">
      <img src={Illu} className="illu" alt="weather illustartion" />
      <Row >
          <label for="location">
              Enter Location :
            </label>
            <Input 
            type="text"
           id="location-name"
           value=""
           />
            
            <Button onClick={()=>{
                    dispatch(display({city}))
                }}>Search
                </Button>
      
        <Col span={24}>
          <Card title={city.name} bordered={false}>
          {city.main ? (
          <div >
            <img
              src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`}
              alt="weather status icon"
              className="weather-icon"
            />

            <p className="">
              {kelvinToFarenheit(city.main.temp)}&deg; C
            </p>

            <p className="">
              
              <strong>{city.name}</strong>
            </p>

            <div className="">
              <div className="">
                <p>
                  
                  <strong>
                    {kelvinToFarenheit(city.main.temp_min)}&deg; C
                  </strong>
                </p>
                <p>
                  
                  <strong>
                    {kelvinToFarenheit(city.main.temp_max)}&deg; C
                  </strong>
                </p>
              </div>
              <div className="">
                <p>
                  
                  <strong>{city.weather[0].main}</strong>
                </p>
                <p>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <LoadingOutlined/>
        )}
         
          </Card>
        </Col>
        
  
      </Row>
    </div>,
  
  
    </div>
    <Test/>
  </div>
  );
}

export default App;
