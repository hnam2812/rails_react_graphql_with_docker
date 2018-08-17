/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface CompanyInputType {
  id?: string | null,
  legal_name?: string | null,
  contact_name?: string | null,
  contact_phone?: string | null,
  address?: string | null,
  vesting_schedule?: string | null,
  rights?: string | null,
  restrictive_legends?: string | null,
  acceleration_provisions?: string | null,
  ceo_signature?: string | null,
  certificate_of_incorporation?: string | null,
  secretary_signature?: string | null,
  remove_ceo_signature?: boolean | null,
  remove_certificate_of_incorporation?: boolean | null,
  remove_secretary_signature?: boolean | null,
};

export interface ShareholderInputType {
  id?: string | null,
  legal_name?: string | null,
  contact_address?: string | null,
  contact_email?: string | null,
  contact_phone?: string | null,
  note?: string | null,
};

export interface updateCompanyMutationVariables {
  input: CompanyInputType,
  id: string,
};

export interface updateCompanyMutation {
  updateCompany:  {
    __typename: "Company",
    legalName: string | null,
    contactName: string | null,
    contactPhone: string | null,
    address: string | null,
    vestingSchedule: string | null,
    rights: string | null,
    restrictiveLegends: string | null,
    accelerationProvisions: string | null,
    ceoSignature: string | null,
    certificateOfIncorporation: string | null,
    secretarySignature: string | null,
    removeCeoSignature: boolean | null,
    removeCertificateOfIncorporation: boolean | null,
    removeSecretarySignature: boolean | null,
  } | null,
};

export interface companyEditQueryVariables {
  id: string,
};

export interface companyEditQuery {
  // Get a company
  company:  {
    __typename: "Company",
    id: string,
    legalName: string | null,
    contactName: string | null,
    contactPhone: string | null,
    address: string | null,
    vestingSchedule: string | null,
    rights: string | null,
    restrictiveLegends: string | null,
    accelerationProvisions: string | null,
    ceoSignature: string | null,
    certificateOfIncorporation: string | null,
    secretarySignature: string | null,
    ceoSignatureFilename: string | null,
    certificateOfIncorporationFilename: string | null,
    secretarySignatureFilename: string | null,
    certificateOfIncorporationFileSize: number | null,
    ceoSignatureFileSize: number | null,
    secretarySignatureFileSize: number | null,
    certificateOfIncorporationFileExtension: string | null,
    ceoSignatureFileExtension: string | null,
    secretarySignatureFileExtension: string | null,
  },
};

export interface companiesQuery {
  companies:  Array< {
    __typename: "Company",
    id: string,
    legalName: string | null,
    contactName: string | null,
    contactPhone: string | null,
  } | null >,
};

export interface createCompanyMutationVariables {
  input: CompanyInputType,
};

export interface createCompanyMutation {
  createCompany:  {
    __typename: "Company",
    legalName: string | null,
    contactName: string | null,
    contactPhone: string | null,
    address: string | null,
    vestingSchedule: string | null,
    rights: string | null,
    restrictiveLegends: string | null,
    accelerationProvisions: string | null,
    ceoSignature: string | null,
    certificateOfIncorporation: string | null,
    secretarySignature: string | null,
    removeCeoSignature: boolean | null,
    removeCertificateOfIncorporation: boolean | null,
    removeSecretarySignature: boolean | null,
  } | null,
};

export interface companyShowQueryVariables {
  id: string,
};

export interface companyShowQuery {
  // Get a company
  company:  {
    __typename: "Company",
    id: string,
    legalName: string | null,
    contactName: string | null,
    contactPhone: string | null,
  },
};

export interface deleteCompanyMutationVariables {
  id: string,
};

export interface deleteCompanyMutation {
  deleteCompany:  {
    __typename: "Company",
    legalName: string | null,
  } | null,
};

export interface updateShareholderMutationVariables {
  input: ShareholderInputType,
  id: string,
};

export interface updateShareholderMutation {
  updateShareholder:  {
    __typename: "Shareholder",
    legalName: string | null,
    contactEmail: string | null,
    contactPhone: string | null,
    contactAddress: string | null,
    note: string | null,
  } | null,
};

export interface shareholderEditQueryVariables {
  id: string,
};

export interface shareholderEditQuery {
  // Get a shareholder
  shareholder:  {
    __typename: "Shareholder",
    id: string,
    legalName: string | null,
    contactEmail: string | null,
    contactPhone: string | null,
    contactAddress: string | null,
    note: string | null,
  },
};

export interface shareholdersQuery {
  shareholders:  Array< {
    __typename: "Shareholder",
    id: string,
    legalName: string | null,
    contactEmail: string | null,
    verified: boolean | null,
    accredited: boolean | null,
    onChain: boolean | null,
  } | null >,
};

export interface createShareholderMutationVariables {
  input: ShareholderInputType,
};

export interface createShareholderMutation {
  createShareholder:  {
    __typename: "Shareholder",
    legalName: string | null,
    contactEmail: string | null,
    contactPhone: string | null,
    contactAddress: string | null,
    note: string | null,
  } | null,
};

export interface shareholderShowQueryVariables {
  id: string,
};

export interface shareholderShowQuery {
  // Get a shareholder
  shareholder:  {
    __typename: "Shareholder",
    id: string,
    legalName: string | null,
    contactPhone: string | null,
    contactAddress: string | null,
    contactEmail: string | null,
    verified: boolean | null,
    note: string | null,
  },
};

export interface deleteShareholderMutationVariables {
  id: string,
};

export interface deleteShareholderMutation {
  deleteShareholder:  {
    __typename: "Shareholder",
    legalName: string | null,
    contactEmail: string | null,
    contactPhone: string | null,
    contactAddress: string | null,
    note: string | null,
  } | null,
};
