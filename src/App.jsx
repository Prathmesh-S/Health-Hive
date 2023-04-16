import { useState } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";
import url from './Hive.png'
import { RedirectToCreateOrganization, SignInButton, useUser} from "@clerk/clerk-react";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
var signed = false



export default function App() {
  const messages = useQuery("listMessages") || [];

  const [newMessageText, setNewMessageText] = useState("");
  const sendMessage = useMutation("sendMessage");

  const [name] = useState(() => "User " + Math.floor(Math.random() * 10000));
  async function handleSendMessage(event) {
    event.preventDefault();
    setNewMessageText("");
    await sendMessage({ body: newMessageText, author: name });
  }
  return (
    <main>
      {/* <h1>Health Hive </h1> */}
      <p className="badge">
        {/* <span>{name}</span> */}
      </p> 
      <Unauthenticated>

      <bHive>
        <img src={url} width="520" height="300"/>
      </bHive>
      <signbutton>
      <SignInButton mode="modal" />
      </signbutton>
      </Unauthenticated>
      <Authenticated>
        <div>AUTHENTICATED</div>
        {/* <reDir></reDir> */}
      </Authenticated>
      <p>Click to be redirected to our Official Site!</p>
      <p>Enter the Password "Health" when redirected to the new website.</p>
      <a href="https://rust-whale-ams4.squarespace.com/">Click to be Redirected</a>
      {/* window.location.replace('https://codefrontend.com/reactjs-redirect-to-url/') */}
    
      <reDir></reDir>
      <ul>
        {/* {messages.map(message => (
          <li key={message._id.toString()}>
            <span>{message.author}:</span>
            <span>{message.body}</span>
            <span>{new Date(message._creationTime).toLocaleTimeString()}</span>
          </li>
        ))} */}
      </ul>
      {/* <form onSubmit={handleSendMessage}>
        <input
          value={newMessageText}
          onChange={event => setNewMessageText(event.target.value)}
          placeholder="Username"
        />
        <input type="submit" value="Send" disabled={!newMessageText} />
      </form> */}
    </main>
    
  );
}

function Badge() {
  const { user } = useUser();
  return <span>Logged in as {user.fullName}</span>;
}

function reDir() {
  window.location.replace('https://codefrontend.com/reactjs-redirect-to-url/');
  <a href="https://rust-whale-ams4.squarespace.com/">Click to be redirected to our official Site!</a>
  return <span>Will redirect in 3 seconds...</span>;
}