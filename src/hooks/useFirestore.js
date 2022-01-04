import { useReducer, useState, useEffect } from "react";
import { db, timestamp } from "../firebase/config";
import { collection, setDoc, doc} from "firebase/firestore";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: false,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return { document: null, isPending: true, error: null, success: false };
    case "ADD_DOCUMENT":
      return {
        document: action.payload,
        isPending: false,
        error: null,
        success: true,
      };
    case "DELETE_DOCUMENT":
      return {
        document: null,
        isPending: false,
        error: null,
        success: true,
      };
    case "EDIT_DOCUMENT":
      return {
        document: action.payload,
        isPending: false,
        error: null,
        success: true,
      };
    case "ERROR":
      return {
        document: null,
        isPending: false,
        error: action.payload,
        success: false,
      };
    default:
      return state;
  }
};

export const useFirestore = (subredditId, postId) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  //Collection reference
  let ref = collection(db, 'category');

  //Ref for the category for new posts
  if(subredditId){
    ref = collection(db, 'category', subredditId, 'posts')
  }

  //Post's ref to add new comments/replies
  if(postId){
    ref = collection(db, 'category', subredditId, 'posts', postId, 'comments')
  }

  console.log(postId)
  //Dispatch if it's not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };
  //Add document
  const addDocument = async (docData) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const createdAt = timestamp;

      const addedDocument = doc(ref);

      //Update doc with the id
      await setDoc(addedDocument, { ...docData, createdAt, id: addedDocument.id });

      dispatchIfNotCancelled({ type: "ADD_DOCUMENT", payload: addedDocument });
    } catch (error) {
      dispatchIfNotCancelled({ type: "ERROR", payload: error.message });
    }
  };

  //Delete document
  const deleteDocument = async (id) => {
    dispatch({ type: "IS_PENDING" });

    try {
      await ref.doc(id).delete();
      dispatchIfNotCancelled({ type: "DELETE_DOCUMENT" });
    } catch (error) {
      dispatchIfNotCancelled({
        type: "ERROR",
        payload: "Could not delete the entry",
      });
    }
  };

  //Edit document
  const editDocument = async (id, doc) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const updatedDocument = await ref.doc(id).update(doc);
      dispatchIfNotCancelled({
        type: "EDIT_DOCUMENT",
        payload: updatedDocument,
      });
    } catch (error) {
      dispatchIfNotCancelled({
        type: "ERROR",
        payload: "Could not edit the entry",
      });
    }
  };
  useEffect(() => {
    return () => {
      setIsCancelled(true);
    };
  }, []);

  return { addDocument, deleteDocument, editDocument, response };
};
