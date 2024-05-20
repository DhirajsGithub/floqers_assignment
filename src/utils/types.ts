export type filterDataType = {
    key: React.Key;
    year: string;
    jobs: string;
    salary: string;
}
export type yearType = {
    avgSalary: number;
    jobs: number;
}

export type InitialValue = {
    "2020": yearType;
    "2021": yearType;
    "2022": yearType;
    "2023": yearType;
    "2024": yearType;
}
export type FilterDataProps = {
    filterData :filterDataType[];
}

export type detailViewDataType={
    key: React.Key;
    jobTitle: string;
    noOfJobs: number;
}

export type TableDetailProps={
    requiredData: detailViewDataType[]
}