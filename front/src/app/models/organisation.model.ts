export class Organisation {
    organisation_id: number;
    full_name: string;
    acronyme: string;
    address: string;
    city: string;
    email: string;
    phone: string;
    departement: string;
    region: string;
    orgaTypeId: number;
    orgaTypeName: string;

    constructor(organisation_id: number, full_name: string, acronyme: string, address: string, city: string, email: string, phone: string, departement: string, region: string, orgaTypeId: number, orgaTypeName: string) {
        this.organisation_id = organisation_id;
        this.full_name = full_name;
        this.acronyme = acronyme;
        this.address = address;
        this.city = city;
        this.email = email;
        this.phone = phone;
        this.departement = departement;
        this.region = region;
        this.orgaTypeId = orgaTypeId;
        switch (this.orgaTypeId) {
            case 1:
                this.orgaTypeName = "N/A";
                break;
            case 2:
                this.orgaTypeName = "Syndicat";
                break;
            case 3:
                this.orgaTypeName = "Parti Politique";
                break;
            default:
                this.orgaTypeName = "";
        }
    }
}