import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../service/api";

const CompanyProfile = () => {
  const [company, setCompany] = useState(null);

  const { companyId } = useParams();

  useEffect(() => {
    const fetchOneCompany = async () => {
      try {
        const { data } = await api.get(`/companies/profile/${companyId}`);
        setCompany(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOneCompany();
  }, [companyId]);

  return (
    <div>
      {company && (
        <>
          <img
            src={company.oneCompany.logo}
            alt={company.oneCompany.name}
            className="h-10"
          />
          <p>Name: {company.oneCompany.name}</p>
          <p>Description: {company.oneCompany.description}</p>
          <p>Headquarters: {company.oneCompany.headquarters}</p>
          <p>Number of employees: {company.oneCompany.numberOfEmployees}</p>
        </>
      )}
    </div>
  );
};

export default CompanyProfile;
