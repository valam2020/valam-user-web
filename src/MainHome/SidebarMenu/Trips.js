import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {TRIPS} from '../../config/apis/endpoint';
import {BASE_URL} from '../../config/env/config';
import './Trips.css';

const Trips = () => {
  const [loading, setLoading] = useState(false);
  const [trips, setTrips] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const hitServiceForTrip = useCallback(() => {
    setLoading(true);
    const user_details = JSON.parse(localStorage.getItem('user_details'));
    if (user_details) {
      let url = BASE_URL + TRIPS;// Replace 'BASE_URL' with your actual base URL
      const data = {
        userId: parseInt(user_details?.user_id),
      };
      axios
        .post(url, data, {
          headers: {
            common_token: user_details?.user_common_token,
          },
        })
        .then((response) => {
          console.log('trips api response...>>>>', response);
          if (response && response.status === 200) {
            const user_trips = response?.data;
            setTrips(user_trips);
            setLoading(false);
            setRefreshing(false);
          } else {
            setTrips([]);
            setLoading(false);
            setRefreshing(false);
          }
        })
        .catch((error) => {
          setLoading(false);
          setRefreshing(false);
          if (error?.response) {
            if (
              error?.response?.data &&
              (error?.response?.data !== '' || !!error?.response?.data)
            ) {
            //   _showToast(
            //     error?.response?.data?.message
            //       ? error?.response?.data?.message
            //       : error?.response?.data?.error
            //       ? error?.response?.data?.error
            //       : error?.response?.data
            //       ? error?.response?.data
            //       : 'Something went wrong!',
            //     'error'
            //   );
            } else {
            //   _showToast('Something went wrong!', 'error');
            }
          } else {
            // _showToast('Something went wrong!', 'error');
          }
        });
    }
  }, []);

  useEffect(() => {
    hitServiceForTrip();
  }, [hitServiceForTrip]);

  const _onRefresh = () => {
    setRefreshing(true);
    hitServiceForTrip();
  };

  const _showToast = (message, type) => {
    // Implement your toast message logic here
  };
  const handlePaymentTotal = (data) => {
   
  };

  const renderItem = (item) => {
    return (
      <div className="containertrip">
        <div className="cardContainertrip">
          <div
            onClick={() => handlePaymentTotal(item)}
            className="pressabletrip"
          >
            <div className="timeContainertrip">
              <span className="titletrip">
                {item?.drop_date
                  ? new Date(item?.drop_date).toLocaleString()
                  : ''}
              </span>
              <div className="paymentContainertrip">
                {item?.payment_total ? (
                  <span className="titletrip">{`$ ${parseFloat(
                    item?.payment_total
                  ).toFixed(2)}`}</span>
                ) : null}

                <span className="bodytrip" style={{ marginLeft: '5px' }}>
                  {`(${item?.payment_type || ''})`}
                </span>
              </div>
            </div>
            <div className="distanceContainertrip">
              <span className="leftSpacetrip">{`FROM: `}</span>
              <span
                className="rightSpacetrip"
                dangerouslySetInnerHTML={{ __html: `${item?.fromAddress || ''}` }}
              />
            </div>

            <div className="distanceContainertrip">
              <span className="leftSpacetrip">{`TO: `}</span>
              <span
                className="rightSpacetrip"
                dangerouslySetInnerHTML={{ __html: `${item?.toAddress || ''}` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="containertrip">
      <div>
        <ul className="ultrip">
          {trips.map((item, index) => (
            <li key={index}>{renderItem(item)}</li>
          ))}
        </ul>
      </div>
      {trips.length === 0 && (
        <div className="emptyContainertrip">
          <span className="emptylistTexttrip">NO RECORDS</span>
        </div>
      )}
    </div>
  );
};

export default Trips;
