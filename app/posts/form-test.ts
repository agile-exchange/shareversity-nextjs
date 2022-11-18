export class Field {
  jobName: string;
  description: string;
  headline: string;
  category: string;
  field: string;
  academicLevel: string;
  location: string;
  skills: string;
  schedule: string;
  institution: string;
  department: string;
  application_link: string;
  compensation: string;

  constructor() {
    this.jobName = "";
    this.description = "";
    this.headline = "";
    this.category = "";
    this.field = "";
    this.academicLevel = "";
    this.location = "";
    this.skills = "";
    this.schedule = "";
    this.institution = "";
    this.department = "";
    this.application_link = "";
    this.compensation = "";
  }
}

export class GildedRose {
  fields: Array<Field>;

  constructor(fields = [] as Array<Field>) {
    this.fields = fields;
  }

    updateQuality() {
      this.fields.forEach((field) => {
        if (field.jobName != "") {
          console.log(field.jobName);
        }
      });
    }

    


}