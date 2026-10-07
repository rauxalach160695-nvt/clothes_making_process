import { FabricType } from "./fabricType.model.js";
import { Customer } from "./customer.model.js";
import { ClothType } from "./clothType.model.js";
import { FabricLot } from "./fabricLot.model.js";
import { Order } from "./order.model.js";
import { CommonDefect } from "./commonDefect.model.js";
import { ClothTypeCommonDefect } from "./clothTypeCommonDefect.model.js";
import { UncommonDefect } from "./uncommonDefect.model.js";
import { CutRule } from "./cutRule.model.js";
import { FabricRoll } from "./fabricRoll.model.js";
import { WorkArea } from "./workArea.model.js";
import { Role } from "./role.model.js";
import { Employee } from "./employee.model.js";
import { FabricReport } from "./fabricReport.model.js";
import { SemiFabric } from "./semiFabric.model.js";
import { Cloth } from "./cloth.model.js";
import { Packing } from "./packing.model.js";

// ClothType associations
ClothType.hasMany(ClothTypeCommonDefect, {
  foreignKey: "clothTypeId",
  as: "clothTypeCommonDefects",
});

// CommonDefect associations
CommonDefect.hasMany(ClothTypeCommonDefect, {
  foreignKey: "commonDefectId",
  as: "clothTypeCommonDefects",
});

// ClothTypeCommonDefect associations
ClothTypeCommonDefect.belongsTo(ClothType, {
  foreignKey: "clothTypeId",
  as: "clothType",
});
ClothTypeCommonDefect.belongsTo(CommonDefect, {
  foreignKey: "commonDefectId",
  as: "commonDefect",
});

// Order associations
Customer.hasMany(Order, {
  foreignKey: "customerId",
  as: "orders",
});
Order.belongsTo(Customer, {
  foreignKey: "customerId",
  as: "customer",
});

ClothType.hasMany(Order, {
  foreignKey: "clothTypeId",
  as: "orders",
});
Order.belongsTo(ClothType, {
  foreignKey: "clothTypeId",
  as: "clothType",
});

FabricType.hasMany(Order, {
  foreignKey: "fabricTypeId",
  as: "orders",
});
Order.belongsTo(FabricType, {
  foreignKey: "fabricTypeId",
  as: "fabricType",
});

Order.hasMany(UncommonDefect, {
  foreignKey: "orderId",
  as: "uncommonDefects",
});

// FabricLot associations
Order.hasMany(FabricLot, {
  foreignKey: "orderId",
  as: "fabricLots",
});
FabricLot.belongsTo(Order, {
  foreignKey: "orderId",
  as: "order",
});

FabricType.hasMany(FabricLot, {
  foreignKey: "fabricTypeId",
  as: "fabricLots",
});
FabricLot.belongsTo(FabricType, {
  foreignKey: "fabricTypeId",
  as: "fabricType",
});

// UncommonDefect associations
UncommonDefect.belongsTo(Order, {
  foreignKey: "orderId",
  as: "order",
});

// Role associations
WorkArea.hasMany(Role, {
  foreignKey: "workAreaId",
  as: "roles",
});
Role.belongsTo(WorkArea, {
  foreignKey: "workAreaId",
  as: "workArea",
});

// Employee associations
Role.hasMany(Employee, {
  foreignKey: "roleId",
  as: "employees",
});
Employee.belongsTo(Role, {
  foreignKey: "roleId",
  as: "role",
});

// CutRule associations
FabricType.hasMany(CutRule, {
  foreignKey: "fabricTypeId",
  as: "cutRules",
});
CutRule.belongsTo(FabricType, {
  foreignKey: "fabricTypeId",
  as: "fabricType",
});

ClothType.hasMany(CutRule, {
  foreignKey: "clothTypeId",
  as: "cutRules",
});
CutRule.belongsTo(ClothType, {
  foreignKey: "clothTypeId",
  as: "clothType",
});

// FabricRoll associations
FabricLot.hasMany(FabricRoll, {
  foreignKey: "fabricLotId",
  as: "fabricRolls",
});
FabricRoll.belongsTo(FabricLot, {
  foreignKey: "fabricLotId",
  as: "fabricLot",
});

FabricRoll.hasMany(SemiFabric, {
  foreignKey: "fabricRollId",
  as: "semiFabrics",
});
SemiFabric.belongsTo(FabricRoll, {
  foreignKey: "fabricRollId",
  as: "fabricRoll",
});

// FabricReport associations
FabricRoll.hasOne(FabricReport, {
  foreignKey: "fabricRollId",
  as: "fabricReport",
});
FabricReport.belongsTo(FabricRoll, {
  foreignKey: "fabricRollId",
  as: "fabricRoll",
});

Employee.hasMany(FabricReport, {
  foreignKey: "qcFabricRollId",
  as: "fabricReports",
});
FabricReport.belongsTo(Employee, {
  foreignKey: "qcFabricRollId",
  as: "qcFabricRoll",
});

Employee.hasMany(SemiFabric, {
  foreignKey: "cutterId",
  as: "cutSemiFabrics",
});
SemiFabric.belongsTo(Employee, {
  foreignKey: "cutterId",
  as: "cutter",
});

Employee.hasMany(SemiFabric, {
  foreignKey: "qcCutId",
  as: "qcCutSemiFabrics",
});
SemiFabric.belongsTo(Employee, {
  foreignKey: "qcCutId",
  as: "qcCut",
});

SemiFabric.hasOne(Cloth, {
  foreignKey: "semiFabricId",
  as: "cloth",
});
Cloth.belongsTo(SemiFabric, {
  foreignKey: "semiFabricId",
  as: "semiFabric",
});

Employee.hasMany(Cloth, {
  foreignKey: "sewerId",
  as: "sewnClothes",
});
Cloth.belongsTo(Employee, {
  foreignKey: "sewerId",
  as: "sewer",
});

Employee.hasMany(Cloth, {
  foreignKey: "qcSewId",
  as: "qcSewClothes",
});
Cloth.belongsTo(Employee, {
  foreignKey: "qcSewId",
  as: "qcSew",
});

Cloth.hasMany(Packing, {
  foreignKey: "clothId",
  as: "packings",
});
Packing.belongsTo(Cloth, {
  foreignKey: "clothId",
  as: "cloth",
});

Employee.hasMany(Packing, {
  foreignKey: "packerId",
  as: "packedClothes",
});
Packing.belongsTo(Employee, {
  foreignKey: "packerId",
  as: "packer",
});

Employee.hasMany(Packing, {
  foreignKey: "qcPackId",
  as: "qcPackings",
});
Packing.belongsTo(Employee, {
  foreignKey: "qcPackId",
  as: "qcPack",
});

export {
  FabricType,
  Customer,
  ClothType,
  FabricLot,
  Order,
  CommonDefect,
  ClothTypeCommonDefect,
  UncommonDefect,
  CutRule,
  FabricRoll,
  WorkArea,
  Role,
  Employee,
  FabricReport,
  SemiFabric,
  Cloth,
  Packing,
};
