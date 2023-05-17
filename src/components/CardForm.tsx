import React, { ChangeEvent, FormEvent, useState, useContext } from 'react';
import HealthPointsForm from './HealthPointsForm';
import InstantActionsForm from './InstantActionsForm';
import ResistancesForm from './ResistancesForm';
import { CardStateContext, initialCardState } from './Context';  
import { after } from 'node:test';

const CardForm = () => {
  // const [card, setCard] = useState(initialCardState);
  const {cardState, setCardState} = useContext(CardStateContext)
  // const [cardDepiction, setCardDepiction] = useState("https://upload.wikimedia.org/wikipedia/commons/a/a3/1950s_Era_Fantasy_Art_Draogn_and_Nymph.jpg");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCardState({ ...cardState, [e.target.name]: e.target.value });
  };

  const handleNestedChange = (property: string, value: any) => {
    setCardState({ ...cardState, [property]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(cardState);
  };

// TODO: what to give to the id field ? generate it ?
  return (
    <form onSubmit={handleSubmit}>
      <h3 className="header-fantasy">Card Creator</h3> 
      <input name="@id" type="hidden" onChange={handleChange} />
      <input name="n:fn" onChange={handleChange} placeholder="Character's name" /><br/>
      <input name="foaf:depiction" onChange={handleChange} placeholder="Image URL" value={cardState["foaf:depiction"]} /><br/>
      <textarea name="n:hasNote" onChange={handleChange} placeholder="Legend ( doesn't affect game play )" /><br/>
      <HealthPointsForm onChange={handleNestedChange} /><br/>
      <InstantActionsForm onChange={handleNestedChange} /><br/>
      <ResistancesForm onChange={handleNestedChange} /><br/>
      <button className="button-fantasy" type="submit">Create Card</button><br/>
    </form>
  );
};

export default CardForm;
