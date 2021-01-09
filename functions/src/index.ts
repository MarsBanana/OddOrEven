import * as functions from 'firebase-functions';
import * as admin from "firebase-admin"
import collections from './collections';

admin.initializeApp()

const db = admin.firestore()

exports.deleteGameDoc = functions.firestore
  .document(`${collections.GAMES_LIST}/{gameId}`)
  .onUpdate((change) => {

      const gameData = change.after.data()
      const gameId = change.after.id
      
      const playersAmount = gameData.players.length

      if (playersAmount === 0) {
        return db.collection(collections.GAMES_LIST).doc(gameId)
          .delete()
          .then(() => {console.log("Deleted game doc with id = " + gameId)})
          .catch((e) => {console.log("Failed deleteGameDoc", e)})
      } else {
        return new Promise<() => void>(() => console.log(gameId + " is still going"))
      }

  })