import React from 'react';
import './styles/App.css';
import { LuSettings } from 'react-icons/lu';
import { MdAdsClick } from 'react-icons/md';

const App = () => {
  const onClickPrimaryBtn = () => {
    const htmlTag = document.querySelector('html');
    const attrValue = htmlTag.getAttribute('data-ui-color-scheme');
    if (attrValue === 'light') {
      htmlTag.setAttribute('data-ui-color-scheme', 'dark');
    } else {
      htmlTag.setAttribute('data-ui-color-scheme', 'light');
    }
  };

  return (
    <div className="b-section">
      <div className="b-container">
        <div className="b-wrapper">
          <h2 className="b-title">Switch to change the color-scheme</h2>
          <div className="b-sub-title-ctn">
            <p className="b-sub-title">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur inventore deserunt, quos nostrum amet hic incidunt
              praesentium adipisci vitae tenetur exercitationem quae quia. Odit
              mollitia non, repellat quidem voluptas voluptate?
            </p>
          </div>
          <div className="b-primary-btn-ctn">
            <button
              title="Click to change theme"
              className="b-primary-btn"
              onClick={onClickPrimaryBtn}
            >
              Click to change theme
            </button>
          </div>
        </div>
        <div className="b-wrapper mt-40">
          <h2 className="b-title">Button on hover</h2>
          <div className="b-btn-test-ctn">
            <button className="b-btn-test">
              <LuSettings />
            </button>
          </div>
          <div className="b-btn-test-ctn">
            <button className="b-btn-test text">
              <MdAdsClick />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
