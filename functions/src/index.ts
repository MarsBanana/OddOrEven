import * as functions from 'firebase-functions';
import * as admin from "firebase-admin"

admin.initializeApp()

const db = admin.firestore()

exports.deleteGameDoc = functions.firestore
  .document('GAMES_LIST/{gameId}')
  .onUpdate((change) => {
      const gameData = change.after.data()
      const gameId = change.after.id
      
      const playersAmount = gameData.players.length

      if (playersAmount === 0) {
        db.collection("GAMES_LIST").doc(gameId)
          .delete()
          .catch((e) => {console.log(e)})
      }

  })