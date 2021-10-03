import axios from "axios";
import { useState } from "react"

import './EditBandForm.scss'

export default function EditBandForm(props) {

  const { name, description, image, bandId, featured, cachedBands, setCachedBands } = props.bandInfo;
  const [nameVal, setNameVal] = useState(name);
  const [descrVal, setDescrVal] = useState(description);
  const [imageVal, setImageVal] = useState(image);
  const [featuredVal, setFeaturedVal] = useState(featured)

  const submitEditForm = () => {
    // event.preventDefault();

    axios.patch(`/api/bands/${bandId}`, {name: nameVal, description: descrVal, band_image: imageVal, featured: featuredVal}).then((results) => {
      const updatedBand = results.data.result.rows[0];
      let updatedBandIndex = 0;
      for (let i=0; i < cachedBands.length; i++) {
        if (cachedBands[i].id === updatedBand.id) {
          updatedBandIndex = i;
        }
      }
      const newBands = [...cachedBands]
      newBands.splice(updatedBandIndex, 1, updatedBand);
      setCachedBands(() => newBands);
    })
  }

  const deleteBand = (bandId) => {
    axios.delete(`/api/bands/${bandId}`).then((results) => {
      const newBands = cachedBands.filter((band) => band.id !== results.data.result.rows[0].id)
      setCachedBands(() => newBands);
    });
  }
  
  return(
    <div className="edit-band-container">
      <div className="edit-band-form-close-button">
        <span></span>
        <button onClick={props.onClose}>X</button>
      </div>
      <h1 className="edit-form-title">Change Band Info</h1>
      <form className="edit-band-form-inputs">
        <label>Band Name</label>
        <input placeholder="Enter new band name" value={nameVal} onChange={({target}) => setNameVal(target.value)}></input>
        <label>Description</label>
        <input placeholder="Enter new description" value={descrVal} onChange={({target}) => setDescrVal(target.value)}></input>
        <label>Image Link</label>
        <input placeholder="Enter new image URL" value={imageVal} onChange={({target}) => setImageVal(target.value)}></input>
        <div className="featured-checkbox">
          <label for="featured"> Featured</label><br/>
          <input id="featured" type="checkbox" checked={featuredVal} onChange={() => setFeaturedVal((prev) => !prev)}></input>
        </div>
        <div className="band-form-bottom-buttons">
          <span><button type="button" onClick={(event) => {
            event.preventDefault();
            submitEditForm()
          }}>Submit</button></span>
          <span><button onClick={(event) => {
            event.preventDefault();
            deleteBand(bandId);
          }
          }>Delete</button></span>
        </div>
      </form>
    </div>
  )
}