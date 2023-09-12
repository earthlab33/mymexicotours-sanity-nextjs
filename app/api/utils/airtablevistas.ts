const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY }).base(
  process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID
);

const table = base("Vistas");
interface RecordType {
  id: string;
  fields: { [key: string]: any };
}

const getMinifiedRecord = (record: RecordType) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

const getMinifiedRecords = (records: RecordType[]) => {
  return records.map((record) => getMinifiedRecord(record));
};

const findRecordById = async (id: string) => {
  return new Promise((resolve, reject) => {
    table.find(id, (error: Error | null, record: RecordType | undefined) => {
      if (error) {
        reject(error);
        return;
      }
      const minifiedRecord = getMinifiedRecord(record!);
      resolve(minifiedRecord);
    });
  });
};
  

export {
  table,
  getMinifiedRecord,
  getMinifiedRecords,
  findRecordById,
};