"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_provider_1 = require("../base-provider");
const personal_info_model_1 = require("../../model/personal-info.model");
class PersonalInfoProvider extends base_provider_1.BaseProvider {
    getPersonalInfo(id) {
        return new Promise((resolve, reject) => {
            personal_info_model_1.PersonalInfo
                .findById({ _id: id })
                .then(response => {
                resolve(response);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    getFullPersonalInfo(id) {
        return new Promise((resolve, reject) => {
            personal_info_model_1.PersonalInfo
                .findById({ _id: id })
                .populate("_user")
                .then(response => {
                resolve(response);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    savePersonalInfo(personalInfo) {
        return new Promise((resolve, reject) => {
            personal_info_model_1.PersonalInfo
                .create(personalInfo)
                .then(response => {
                resolve(response);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    updatePersonalInfo(personalInfo) {
        return new Promise((resolve, reject) => {
            personal_info_model_1.PersonalInfo
                .findOneAndUpdate({ _id: personalInfo._id }, personalInfo)
                .then(response => {
                resolve(response);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
    deletePersonalInfo(id) {
        return new Promise((resolve, reject) => {
            personal_info_model_1.PersonalInfo
                .findOneAndRemove({ _id: id })
                .then(response => {
                resolve(response);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
}
exports.PersonalInfoProvider = PersonalInfoProvider;
