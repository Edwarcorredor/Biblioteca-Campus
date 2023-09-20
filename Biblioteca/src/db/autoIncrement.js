async function getNextSequenceValue(db, sequenceName) {
    const sequenceDocument = await db.collection("counters").findOneAndUpdate(
        { _id: sequenceName }, 
        { $inc: { seq: 1 } },
        { returnDocument: "after" } 
    );
    return sequenceDocument.seq; 
}

export default getNextSequenceValue;
